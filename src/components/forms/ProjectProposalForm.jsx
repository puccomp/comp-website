import React, { useState, useEffect } from 'react'
import {
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  Grid,
} from '@mui/material'
import PhoneNumberField from '../inputs/PhoneNumberField'
import NameField from '../inputs/NameField'

import useSubmit from '../../hooks/useSubmit'
import { submitProjectProposal } from '../../api/client'
import FeedbackSnackbar from '../FeedbackSnackbar'

const ProjectProposalForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    projectDescription: '',
    appFeatures: '',
    visualIdentity: 'Não',
    budget: '',
  })

  const {
    fullName,
    phone,
    projectDescription,
    appFeatures,
    visualIdentity,
    budget,
  } = formData
  const { handleSubmit, loading, success, error } = useSubmit()

  const [snackbar, setSnackbar] = useState({
    open: false,
    severity: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    await handleSubmit(formData, submitProjectProposal)
  }

  useEffect(() => {
    if (success) {
      setSnackbar({
        open: true,
        severity: 'success',
        message: 'Projeto enviado com sucesso!',
      })
      setFormData({
        fullName: '',
        phone: '',
        projectDescription: '',
        appFeatures: '',
        visualIdentity: 'Não',
        budget: '',
      })
    }
    if (error) {
      setSnackbar({
        open: true,
        severity: 'error',
        message: 'Ocorreu um erro ao enviar o projeto. Tente novamente.',
      })
    }
  }, [success, error])

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }))
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <NameField
              label="Seu Nome"
              name="fullName"
              value={fullName}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <PhoneNumberField
              label="Telefone"
              name="phone"
              value={phone}
              onChange={(_e, rawValue) => {
                setFormData((prev) => ({ ...prev, phone: rawValue }))
              }}
              required
            />
          </Grid>
        </Grid>
        <TextField
          fullWidth
          label="O que você quer construir?"
          variant="outlined"
          margin="dense"
          multiline
          rows={3}
          name="projectDescription"
          value={projectDescription}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          label="Quais seriam as funcionalidades da sua aplicação?"
          variant="outlined"
          margin="dense"
          multiline
          rows={4}
          name="appFeatures"
          value={appFeatures}
          onChange={handleChange}
        />
        <FormControl component="fieldset" margin="dense" fullWidth>
          <FormLabel component="legend">
            Já tem identidade visual pronta?
          </FormLabel>
          <RadioGroup
            row
            name="visualIdentity"
            value={visualIdentity}
            onChange={handleChange}
          >
            <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
            <FormControlLabel
              value="Sim, mas gostaria de aprimorá-la"
              control={<Radio />}
              label="Sim, mas gostaria de aprimorá-la"
            />
            <FormControlLabel value="Não" control={<Radio />} label="Não" />
          </RadioGroup>
        </FormControl>
        <TextField
          fullWidth
          label="Qual é seu orçamento disponível?"
          variant="outlined"
          margin="dense"
          name="budget"
          value={budget}
          onChange={handleChange}
        />
        <Box textAlign="center" marginTop="1rem">
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Enviando...' : 'Enviar proposta'}
          </Button>
        </Box>
      </form>

      <FeedbackSnackbar
        open={snackbar.open}
        severity={snackbar.severity}
        message={snackbar.message}
        onClose={handleCloseSnackbar}
      />
    </>
  )
}

export default ProjectProposalForm
