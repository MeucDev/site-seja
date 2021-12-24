<template>
  <div class="temporada-teen-2022 event">
    <TitleCover image="images/temporada-teen-sem-filtro.jpg" imageBackground="#ffffff" title="#SemFiltro" subtitle="Temporada Teen Verão 2022">
      <h3>São Bento do Sul</h3>
      <h3>13 a 16 de Janeiro</h3>
    </TitleCover>
    <div class="container sub-sized py-2">
      <CallToAction title="Inscreva-se!" link="http://inscricao.sejameuc.com.br/#/0" :enabled="true"></CallToAction>
      <div class="mt-5">
        <p>
          Deus criou o homem e viu que era muito bom! Mas, desde o princípio o homem quis ser o que não é. O Deus criador e criativo fez homens e mulheres diversos. Diferentes em suas características, temperamentos, personalidades, e claro, em exclusividade & sem cópia. Mas incontáveis vezes o ser humano quis ser o que não é. Quis ser uma cópia, igual a qualquer outra coisa. Se vestiu com mentiras e colocou as máscaras da falsidade. Quis ser tal qual e se esqueceu de quem é. Se esqueceu que a semelhança deve ser unicamente com o Pai.<br/>
          Só o teu Criador sabe quem você é de fato: <i>"... pois o homem vê a aparência, mas o Senhor vê o coração"</i> (1 Samuel 16.7). E para verdadeiramente se conhecer, é preciso verificar o que ELE vê em você... e o que ELE vê? ... A resposta é: o seu coração!<br/>
          O Senhor está chamando você para um encontro verdadeiro &amp; real. Ele quer vê-lo e vê-la de cara limpa. Quer ver e o vê <b>SEM FILTRO!</b><br/>
          Esse tema tão profundo inspirou nossa <b>TEMPORADA TEEN 2022</b>!
        </p>

        <h5>Quem pode participar</h5>
        <p>Adolescentes com 11 a 16 anos de idade.</p>

        <h5>Sobre as Inscrições</h5>
        <p>As inscrições poderão ser realizadas no dia 25 de Novembro as 20hrs. Fique ligado!</p>

        <h5>Prazos / Investimento</h5>
        <p>
          Até 09 de Dezembro: 280,00<br/>
          Até 26 de Dezembro: 310,00<br/>
          Após este prazo: 330,00<br/><br/>

          <small>* Alojamento e refeições incluso.</small>
        </p>

        <h5>Formas para realizar o investimento</h5>
        <p>
          Cartão de Crédito (possibilidade de parcelamento)<br/>
          Depósito em Conta<br/>
          Pix<br/><br/>

          <small>* Caso a forma escolhida seja via depósito em conta ou Pix, enviar comprovante para o e-mail <a href="mailto:contato@sejameuc.com.br" target="_blank">contato@sejameuc.com.br</a> para que possamos confirmar sua vaga.</small>
        </p>

        <h5>Credenciamento / Encerramento</h5>
        <p>
          - Chegada a partir das 17:00 de quinta-feira (13/01)<br/>
          - Encerramento com o almoço de domingo (16/01)
        </p>

        <h5>O que levar</h5>
        <ul>
          <li>Prato e talheres</li>
          <li>Lençol</li>
          <li>Cobertor</li>
          <li>Travesseiro</li>
          <li>Toalhas</li>
          <li>Material de higiene</li>
          <li>Roupa de esporte</li>
          <li>Lanterna <small>(se tiver)</small></li>
          <li>Caneta</li>
          <li>Bíblia</li>
          <li>Muita disposição</li>
          <li class="mt-3"><b>Importante</b>: Trazer autorização dos pais ou responsáveis. Baixe modelo de arquivo <a href="https://www.icloud.com/iclouddrive/0N4rqTZTke_8wqJZXYkDlQlKA#Termo_de_Responsabilidade_Retiro_de_Adolescentes_2022" target="_blank">neste link</a>.</li>
        </ul>

        <h5>Outras informações</h5>
        <p>
          Haverá cantina durante todo evento.<br/>
          Levantaremos uma oferta de gratidão.
        </p>

        <h5>Mais informações / dúvidas</h5>
        <p>
          E-mail: <a href="mailto:contato@sejameuc.com.br" target="_blank">contato@sejameuc.com.br</a><br/>
          Telefone: <a href="tel:+5547999337491" target="_blank">(47) 99933-7491</a> (ou <a href="https://wa.me/5547999337491" target="_blank">WhatsApp</a>)
        </p>
      </div>
    </div>
    <Socials></Socials>
  </div>
</template>

<script lang="ts">
import { Options, setup, Vue } from 'vue-class-component'
import { useMeta } from 'vue-meta'
import TitleCover from '@/components/TitleCover.vue'
import CallToAction from '@/components/CallToAction.vue'
import Socials from '@/components/Socials.vue'

@Options({
  components: {
    TitleCover,
    CallToAction,
    Socials
  }
})
export default class TemporadaTeen2022 extends Vue {
  meta = setup(() => useMeta({
    title: '#SemFiltro | Temporada Teen Verão 2022',
    meta: [
      { name: 'og:type', content: 'article' },
      { name: 'og:locale', content: 'pt_BR' },
      { name: 'og:site_name', content: 'SEJA MEUC' },
      { name: 'og:title', content: '#SemFiltro | Temporada Teen Verão 2022' }
    ]
  }))
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/event';
</style>
