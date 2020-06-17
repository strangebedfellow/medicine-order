<template>
  <div class="content">
    <button @click="reset" class="btn btn-info mb-3 mt-3">Nowe zlecenie</button>
    <form @submit.prevent="generateOrder">
      <div class="input-group mb-3 mt-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01">Wybierz lek</label>
        </div>
        <select class="custom-select" id="inputGroupSelect01" v-model="drug" @change="hideResult">
          <option>Lek A</option>
          <option>Lek B</option>
          <option>Lek C</option>
        </select>
      </div>
      <div class="input-group mb-3 mt-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01">Pora podania leku</label>
        </div>
        <select class="custom-select" id="inputGroupSelect01" v-model="time" @change="hideResult">
          <option>8:00</option>
          <option>15:00</option>
          <option>22:00</option>
        </select>
      </div>
      <p>Wybierz datę podania leku:</p>
      <datepicker v-model="date" name="date" :value="date" :language="pl"></datepicker>
      <div class="input-group mb-3 mt-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Wybierz ilość</span>
        </div>
        <input class="form-control" v-model="amount" type="number" min="0" @change="hideResult" />
      </div>
      <div class="input-group mb-3 mt-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01">Wybierz oddział</label>
        </div>
        <select class="custom-select" id="inputGroupSelect01" v-model="ward" @change="hideResult">
          <option>Oddział A</option>
          <option>Oddział B</option>
          <option>Oddział C</option>
        </select>
      </div>
      <div class="input-group mb-3 mt-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Imię pacjenta</span>
        </div>
        <input class="form-control" v-model="patient.name" type="text" @focus="hideResult" />
      </div>
      <div class="input-group mb-3 mt-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Nazwisko pacjenta</span>
        </div>
        <input class="form-control" v-model="patient.surname" type="text" @focus="hideResult" />
      </div>
      <div class="input-group mb-3 mt-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">PESEL pacjenta</span>
        </div>
        <input class="form-control" v-model="patient.pesel" type="text" @focus="hideResult" />
      </div>
      <div class="alert alert-danger" role="alert" v-if="!validate">Wypełnij wszystkie pola!</div>
    </form>
    <button class="btn btn-danger mb-3 mt-3" @click="generateOrder">Generuj zlecenie</button>
     <hr>
    <result
      v-if="visible"
      :drug="drug"
      :amount="amount"
      :time="time"
      :date="date"
      :ward="ward"
      :patient="patient"
    ></result>
  </div>
</template>
<style>
.content {
  margin: 0 auto;
  width: 90vw;
}

.input-group-text {
  background-color: rgb(69, 88, 97);
  color: white;
  width: 150px;
}
</style>

<script>
import Datepicker from "vuejs-datepicker";
import {pl} from 'vuejs-datepicker/dist/locale'
import Result from "./Result";
export default {
  components: {
    Datepicker,
    Result
  },
  data: function() {
    return {
      drug: "",
      time: "",
      date: new Date(),
      amount: 0,
      ward: "",
      patient: {
        name: "",
        surname: "",
        pesel: ""
      },
      visible: false,
      validate: true,
      pl: pl
    };
  },
  methods: {
    generateOrder: function() {
      this.visible = true;
      if (
        this.drug == "" ||
        this.time == "" ||
        this.amount == 0 ||
        this.ward == "" ||
        this.patient.name == "" ||
        this.patient.surname == "" ||
        this.patient.pesel == ""
      ) {
        this.visible = false;
        this.validate = false;
      } else {
        this.visible = true;
        this.validate = true;
      }
    },
    reset: function() {
      this.visible = false;
      this.drug = "";
      this.time = "";
      this.amount = 0;
      (this.ward = ""),
        (this.patient = {
          name: "",
          surname: "",
          pesel: ""
        });
    },
    hideResult: function() {
      this.visible = false;
    }
  }
};
</script>
