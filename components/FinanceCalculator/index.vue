<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <h1>حاسبة التمويل</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            label="مبلغ التمويل"
            type="number"
            v-model="loanAmount"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            label="نسبة الفائدة"
            type="number"
            v-model="interestRate"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <!-- <v-text-field label="المدة" type="number" v-model="loanTerm"></v-text-field> -->
          <v-select
            :items="loanTerm"
            v-model="loanBind"
            label="المدة"
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn
            color="primary"
            @click="calculateTotalAmount(loanAmount, interestRate, loanBind)"
            >حساب</v-btn
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <p>{{ result }}</p>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      loanAmount: 100000,
      interestRate: 1,
      loanBind: 12,
      loanTerm: [10, 12, 24, 36, 48, 60],
      result: "",
    };
  },
  methods: {
    calculateTotalAmount(principal, interestRate, months) {
      const interest = (principal * interestRate) / 100;
      const totalAmount = principal + interest;
      const monthlyRate = totalAmount / months
      this.result = monthlyRate;

      return monthlyRate;
    },

    calculate() {
      const principal = parseFloat(this.loanAmount);
      const rate = parseFloat(this.interestRate) / 100 / 12;
      const term = parseFloat(this.loanTerm);

      if (isNaN(principal) || isNaN(rate) || isNaN(term)) {
        this.result = "الرجاء إدخال قيم صحيحة.";
        return;
      }

      // Using the PMT function
      const monthlyPayment = -this.PMT(rate, term, principal);

      this.result = `القسط الشهري: ${monthlyPayment.toFixed(2)}`;
    },
    PMT(rate, nper, pv) {
      // PMT function implementation
      return (pv * rate) / (1 - Math.pow(1 + rate, -nper));
    },
  },
};
</script>
