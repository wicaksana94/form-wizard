<template>
  <div id="summary">
    <h1>Summary</h1>
    <h2>{{ propsData.name }}</h2>
    <p class="label-form">Name: {{ propsData.name }}</p>
    <p class="label-form">Age: {{ propsData.age }}</p>
    <p class="label-form">Where do you live: {{ propsData.country }}</p>
    <p class="label-form">Package: {{ propsData.package }}</p>
    <p class="label-form">Premium: {{ propsData.premium }}</p>

    <div class="form-action">
      <button class="btn-back" @click="back()">Back</button>
      <button class="btn-next" @click="buy()">Buy</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    propsData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    back() {
      this.$swal({
        title: "You want to go back?",
        text: "You can't undo this and your data will cleared immidiatelly.",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Back",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$router.push({ path: "/form" });
        }
      });
    },
    buy() {
      this.$swal({
        title: "Are you sure?",
        text: "A full of benefit and packages awaits, so, let's buy!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, buy!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal(
            "Purchased!",
            "Your premium will be ready in 10 minutes. Please check your email.",
            "success"
          ).then((result) => {
            if (result.isConfirmed) {
              this.$router.push({ path: "/" });
            }
          });
        }
      });
    },
  },
};
</script>

<style scoped>
#summary {
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  text-align: center;
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
