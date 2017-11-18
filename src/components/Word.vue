<template>
  <tr>
    <td>
      {{word}}
    </td>
    <td>
      {{count | count}}
    </td>
  </tr>
</template>

<script>
    export default {
        name: "word.js",
        props: {
            word: {},
            count: {},
        },
        filters: {
            count(value){
                if(value === 1){
                    return "once";
                }
                if(value === 2){
                    return "twice";
                }
                if(value === 3){
                    return "thrice";
                }

                return value + " times";
            }
        }
    }
</script>

<style scoped>

</style>