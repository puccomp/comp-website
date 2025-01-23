import React, { createContext, useContext, useEffect, useState } from 'react'
import { fetchMembers } from '../api/client'

const MembersContext = createContext()

export const MembersProvider = ({ children }) => {
  const [mentors, setMentors] = useState([])
  const [oldMembers, setOldMembers] = useState([])
  const [teamMembers, setTeamMembers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadMembers = async () => {
      try {
        const members = await fetchMembers()
        const { mentors, oldMembers, teamMembers } = categorizeMembers(members)
        setMentors(mentors)
        setOldMembers(oldMembers)
        setTeamMembers(teamMembers)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadMembers()
  }, [])

  const categorizeMembers = (members) => {
    const mentors = members.filter((member) => member.role === 'Mentor')
    const oldMembers = members.filter(
      (member) => member.isActive === 0 && member.role !== 'Mentor'
    )
    const teamMembers = members.filter(
      (member) => member.isActive === 1 && member.role !== 'Mentor'
    )
    return { mentors, oldMembers, teamMembers }
  }

  return (
    <MembersContext.Provider
      value={{ mentors, oldMembers, teamMembers, loading, error }}
    >
      {children}
    </MembersContext.Provider>
  )
}

export const useMembers = () => {
  const context = useContext(MembersContext)
  if (!context)
    throw new Error('useMembers must be used within a MembersProvider')
  return context
}
