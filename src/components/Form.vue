<template>
  <div id="form">
    <h2>Tell us about yourself</h2>
    <p class="label-form">Name</p>
    <input
      class="input-form"
      type="text"
      placeholder="Add text"
      v-model="name"
    />
    <p class="label-form">Age</p>
    <input
      class="input-form"
      type="number"
      min="1"
      v-model="age"
      @change="onChangeHandler"
    />
    <p class="label-form">Where do you live</p>
    <select
      class="input-form"
      v-model="selectedCountryData"
      @change="onChangeHandler"
    >
      <option
        v-for="item in countryData"
        :value="{
          country: item.country,
          currency: item.currency,
          rate: item.rate,
        }"
      >
        {{ item.country }}
      </option>
    </select>
    <div v-for="(item, index) in packages" :key="index" class="container-radio">
      <input
        class="input-radio"
        type="radio"
        name="packages"
        v-model="selectedPackage"
        :value="{
          name: item.name,
          additionalPercentage: item.additionalPercentage,
        }"
        @click="clickPackage(item)"
      />
      <label class="input-radio-label">
        {{ calculatePackage(item) }}
      </label>
    </div>

    <h3 v-if="selectedPackage !== {}">
      Your premium is: &nbsp;
      {{ `${totalPrice}${selectedCountryData.currency}` }}
    </h3>
    <div class="form-action">
      <button class="btn-back" @click="back()">Back</button>
      <button class="btn-next" @click="next()">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age: 1,
      packages: [
        {
          name: "Standar",
          additionalPercentage: 0,
        },
        {
          name: "Safe",
          additionalPercentage: 0.5,
        },
        {
          name: "Super Safe",
          additionalPercentage: 0.75,
        },
      ],
      selectedPackage: {
        name: "Standar",
        additionalPercentage: 0,
      },
      countryData: [
        {
          country: "Hong Kong",
          currency: "HKD",
          rate: 1,
        },
        {
          country: "USA",
          currency: "USD",
          rate: 2,
        },
        {
          country: "Australia",
          currency: "UAD",
          rate: 3,
        },
      ],
      selectedCountryData: {
        country: "Hong Kong",
        currency: "HKD",
        rate: 1,
      },
      additionalPrice: 0,
      totalPrice: 0,
    };
  },
  methods: {
    onChangeHandler() {
      this.clickPackage(this.selectedPackage);
      this.totalPrice = this.calculatePrice();
    },
    calculatePrice() {
      return (
        this.age * 10 * this.selectedCountryData.rate + this.additionalPrice
      );
    },
    calculatePackage(item) {
      if (this.age !== 0 && item.additionalPercentage === 0) {
        this.additionalPrice = 0;
        return item.name;
      } else if (this.age !== 0) {
        this.additionalPrice =
          this.age *
          10 *
          this.selectedCountryData.rate *
          item.additionalPercentage;
        return `${item.name} (+${
          this.age *
          10 *
          this.selectedCountryData.rate *
          item.additionalPercentage
        }${this.selectedCountryData.currency}, ${
          item.additionalPercentage * 100
        }%)`;
      } else {
        return "error";
      }
    },
    clickPackage(item) {
      this.additionalPrice =
        this.age *
        10 *
        this.selectedCountryData.rate *
        item.additionalPercentage;

      this.totalPrice = this.calculatePrice();
    },
    defaultTotalPrice() {
      this.clickPackage(this.selectedPackage);
    },
    back() {
      this.$router.push({ path: "/" });
    },
    next() {
      if (this.age > 100) {
        this.$router.push({ path: "/error" });
      } else {
        if (this.name === "") {
          this.$swal("Please fill name");
        } else if (this.age < 1) {
          this.$swal("Please fill age");
        } else {
          this.$router.push({
            name: "summary",
            params: {
              propsData: {
                name: this.name,
                age: this.age,
                country: this.selectedCountryData.country,
                package: this.selectedPackage.name,
                premium: `${this.totalPrice}${this.selectedCountryData.currency}`,
              },
            },
          });
        }
      }
    },
  },
  watch: {
    totalPrice(newData) {
      return newData;
    },
    additionalPrice(newData) {
      return newData;
    },
  },
  mounted() {
    this.defaultTotalPrice();
  },
};
</script>

<style scoped>
#form {
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
}

.input-form {
  display: block;
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.container-radio {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.input-radio {
  margin-bottom: 1rem;
}

.form-action {
  margin-top: 2rem;
}

.btn-back {
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: #fff;
  color: #000;
  border-radius: 5px;
  width: 5rem;
  font-weight: 600;
  margin-right: 0.5rem;
}

.btn-next {
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: #000;
  color: #fff;
  border-radius: 5px;
  width: 5rem;
  font-weight: 600;
  margin-left: 0.5rem;
}
</style>
