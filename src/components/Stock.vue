<template>
  <div class="col-sm-6">
    <!-- <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price }} {{ totalPrice }})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
            :class="{danger: insufficientFunds}"
            >
        </div>
        <div class="pull-right">
          <button
            class="btn btn-success"
            @click="buyStock"
            :disabled="quantity <= 0 || !(quantity % 1 === 0) || insufficientFunds"
            >
            {{ insufficientFunds ? 'Insufficient Funds' : 'Buy'}}
          </button>
        </div>
      </div>
    </div> -->
  </div>

</template>

<script>
export default {
//   props: ['stock'],
//   data(){
//     return {
//       quantity: 0,
//     }
//   },
//   computed:{
//     insufficientFunds(){
//       return (this.quantity * this.stock.price) > this.$store.getters.funds;
//     },
//     totalPrice(){
//       if(this.quantity > 0){
//         return '| Total Price: ' + (this.quantity * this.stock.price)
//       } else {
//         return ''
//       }
//     }
//   },
//   methods: {
//     buyStock(){
//       const order = {
//         stockId: this.stock.id,
//         stockPrice: this.stock.price,
//         quantity: this.quantity,
//       };
//       this.$store.dispatch('buyStock', order);
//       console.log(order)
//       this.quantity = 0;
//     }
//   }
// }
</script>
