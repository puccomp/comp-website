import React, { useState, useEffect } from 'react'
import {
  Card,
  TextField,
  Typography,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
} from '@mui/material'
import { styled } from '@mui/system'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

import NameField from '../inputs/NameField'
import PhoneNumberField from '../inputs/PhoneNumberField'
import FeedbackSnackbar from '../FeedbackSnackbar'

import useSubmit from '../../hooks/useSubmit'
import { submitCV } from '../../api/client'

const Input = styled('input')({
  display: 'none',
})

const coursesWithPeriods = {
  'Ciência da Computação': 8,
  'Engenharia de Software': 8,
  'Engenharia de Computação': 10,
  'Ciência de Dados': 8,
  'Jogos Digitais': 8,
  Física: 8,
  Matemática: 8,
}

const CVForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    linkedIn: '',
    gitHub: '',
    course: '',
    period: '',
    resume: null,
  })

  const { handleSubmit, loading, success, error } = useSubmit()

  const [showSnackbar, setShowSnackbar] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const [snackbarSeverity, setSnackbarSeverity] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (name === 'course') setFormData((prev) => ({ ...prev, period: '' }))
  }

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }))
  }

  const clearForm = () => {
    setFormData({
      fullName: '',
      phone: '',
      linkedIn: '',
      gitHub: '',
      course: '',
      period: '',
      resume: null,
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    if (!formData.resume) {
      setSnackbarMessage(
        'Por favor, anexe seu currículo em PDF antes de enviar o formulário.'
      )
      setSnackbarSeverity('warning')
      setShowSnackbar(true)
      return
    }

    const payload = new FormData()
    Object.entries(formData).forEach(([key, value]) => {
      payload.append(key, value)
    })

    await handleSubmit(payload, submitCV)
  }

  useEffect(() => {
    if (success) {
      setSnackbarMessage('Currículo enviado com sucesso!')
      setSnackbarSeverity('success')
      setShowSnackbar(true)
      clearForm()
    }

    if (error) {
      setSnackbarMessage(
        'Erro ao enviar formulário. Por favor, tente novamente.'
      )
      setSnackbarSeverity('error')
      setShowSnackbar(true)
    }
  }, [success, error])

  const generatePeriods = (course) => {
    const totalPeriods = coursesWithPeriods[course] || 0
    const periods = Array.from(
      { length: totalPeriods },
      (_, i) => `${i + 1}º Semestre`
    )
    return [...periods, 'Irregular']
  }

  return (
    <Card
      sx={{
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
        border: 1,
        borderColor: 'divider',
      }}
    >
      <Typography variant="h5" gutterBottom align="center">
        Formulário de Inscrição
      </Typography>

      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          {/* FULL NAME */}
          <Grid item xs={12}>
            <NameField
              value={formData.fullName}
              onChange={(e) =>
                handleChange({
                  target: { name: 'fullName', value: e.target.value },
                })
              }
              required
            />
          </Grid>

          {/* PHONE */}
          <Grid item xs={12}>
            <PhoneNumberField
              value={formData.phone}
              onChange={(e) =>
                handleChange({
                  target: { name: 'phone', value: e.target.value },
                })
              }
              required
            />
          </Grid>

          {/* LinkedIn */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="LinkedIn (Opcional)"
              name="linkedIn"
              value={formData.linkedIn}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>

          {/* GitHub */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="GitHub (Opcional)"
              name="gitHub"
              value={formData.gitHub}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>

          {/* COURSE / PERIOD */}
          <Grid item xs={12} container spacing={2}>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="course-label">Curso</InputLabel>
                <Select
                  labelId="course-label"
                  id="course-select"
                  value={formData.course}
                  name="course"
                  onChange={handleChange}
                  required
                >
                  {Object.keys(coursesWithPeriods).map((course) => (
                    <MenuItem key={course} value={course}>
                      {course}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="period-label">Período Atual</InputLabel>
                <Select
                  labelId="period-label"
                  id="period-select"
                  value={formData.period}
                  name="period"
                  onChange={handleChange}
                  required
                  disabled={!formData.course}
                >
                  {generatePeriods(formData.course).map((period) => (
                    <MenuItem key={period} value={period}>
                      {period}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          {/* CV */}
          <Grid item xs={12}>
            <label htmlFor="resume-upload">
              <Input
                accept="application/pdf"
                id="resume-upload"
                type="file"
                name="resume"
                onChange={handleFileChange}
              />
              <Button
                fullWidth
                variant="outlined"
                component="span"
                startIcon={<CloudUploadIcon />}
              >
                Anexar Currículo (PDF)
              </Button>
            </label>
            {formData.resume && (
              <Typography variant="body2" sx={{ mt: 1 }}>
                Arquivo: {formData.resume.name}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : 'Enviar'}
            </Button>
          </Grid>
        </Grid>
      </form>

      {/* FEEDBACK */}
      <FeedbackSnackbar
        open={showSnackbar}
        severity={snackbarSeverity}
        message={snackbarMessage}
        onClose={() => setShowSnackbar(false)}
      />
    </Card>
  )
}

export default CVForm
