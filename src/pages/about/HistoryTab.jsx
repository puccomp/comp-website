import React from 'react'
import TabContent from '../../components/TabContent'
import { Paragraph } from '../../styles/Texts'

const HistoryTab = ({ value, index }) => {
  return (
    <TabContent value={value} index={index}>
      <Paragraph>
        A COMP nasceu no <strong>dia 3 de março de 2024</strong>, inicialmente
        sob o nome <strong>T.F.R.L.</strong>, uma sigla que homenageava os
        fundadores:{' '}
        <strong>
          Thomas Neuenschwander, Matheus Fagundes, Raphael Arnout e Luca Gonzaga
        </strong>
        , alunos do curso de Ciência da Computação do Instituto de Ciências
        Exatas e Informática (ICEI) da PUC Minas. Esses entusiastas uniram suas
        habilidades e paixão pela tecnologia para criar uma iniciativa que fosse
        além do ambiente acadêmico, conectando a teoria aprendida em sala de
        aula com as demandas reais do mercado. Logo após o lançamento, a empresa
        ganhou o nome pelo qual hoje é amplamente conhecida:{' '}
        <strong>COMP</strong>, uma abreviação direta de "computação", que
        reflete a essência da nossa área de atuação e reforça o nosso propósito
        de desenvolver soluções tecnológicas personalizadas.
      </Paragraph>
      <Paragraph>
        O primeiro projeto realizado pela COMP foi para{' '}
        <strong>Bárbara Costa</strong>, uma influenciadora fitness em ascensão,
        que desejava uma <strong>Landing Page</strong> atrativa para o
        lançamento do seu curso intitulado <em>"Dia de 26 Horas"</em>. Esse
        desafio não só marcou a estreia da empresa no mercado, como também
        proporcionou um aprendizado prático valioso. Durante o desenvolvimento
        do projeto, a equipe cresceu com a chegada de{' '}
        <strong>Vinicius Goddard</strong>, um talentoso especialista em
        desenvolvimento web e design, também aluno de Ciência da Computação da
        PUC Minas. Sua contribuição foi essencial para o sucesso do projeto e
        para o fortalecimento da equipe.
      </Paragraph>
      <Paragraph>
        Logo após o término do primeiro trabalho, a COMP assumiu um desafio
        ainda mais complexo: o desenvolvimento do software chamado{' '}
        <strong>"Bolão Sorte Online"</strong>, uma solução inovadora baseada em
        filtros estatísticos, projetada para aumentar as probabilidades de
        sucesso dos usuários em loterias como a <strong>Mega-Sena</strong> e a{' '}
        <strong>Quina</strong>. O cliente, um economista entusiasta de loterias,
        procurava uma ferramenta que combinasse análises matemáticas avançadas
        com facilidade de uso, possibilitando a criação de bolões estratégicos e
        personalizados. Esse projeto exigiu um alto nível de{' '}
        <strong>conhecimento técnico, inovação e criatividade</strong>,
        desafiando a equipe a explorar conceitos de estatística aplicada e
        design de software robusto.
      </Paragraph>
      <Paragraph>
        Agora, em <strong>2025</strong>, a COMP está pronta para iniciar uma
        nova fase em sua história. Com o objetivo de expandir suas operações e
        promover o engajamento acadêmico, a empresa abrirá suas portas para
        estudantes de todos os cursos do <strong>ICEI</strong>, por meio de um
        processo seletivo que valoriza a diversidade de habilidades e
        perspectivas. Essa iniciativa busca não apenas aumentar a capacidade
        técnica e criativa da equipe, mas também consolidar a COMP como um
        espaço de aprendizado e inovação, unindo excelência acadêmica e prática
        de mercado.
      </Paragraph>
    </TabContent>
  )
}

export default HistoryTab
