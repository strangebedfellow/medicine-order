<template>
  <div class="order-result">
    <div id="printMe">
      <table class="table table-striped">
        <tbody>
          <tr>
            <th scope="row">Lek</th>
            <td>{{drug}}</td>
          </tr>
          <tr>
            <th scope="row">Pora dnia</th>
            <td>{{time}}</td>
          </tr>
          <tr>
            <th scope="row">Data</th>
            <td>{{ date | moment("DD/MM/YYYY") }}</td>
          </tr>
          <tr>
            <th scope="row">Ilość</th>
            <td>{{ amount }}</td>
          </tr>
          <tr>
            <th scope="row">Oddział</th>
            <td>{{ ward }}</td>
          </tr>
          <tr>
            <th scope="row">Pacjent</th>
            <td>{{ patient.name }} {{ patient.surname }} PESEL: {{ patient.pesel }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <button class="btn btn-secondary btn-lg btn-block mb-3 mt-3" @click="print">Drukuj zlecenie</button>
  </div>
</template>
<style>
.order-result {
  background-color: rgb(255, 255, 255);
  max-width: 90vw;
  margin: 0 auto;
}
</style>
<script>
export default {
  props: {
    drug: String,
    amount: String,
    time: String,
    date: Date,
    ward: String,
    patient: Object
  },
  methods: {
    print() {
      this.$htmlToPaper("printMe");
    }
  }
};
</script>
