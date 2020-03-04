<template>
    <div>
          <button class="btn btn-success float-left" @click.prevent="prev()">Previous</button>
          <button class="btn btn-success float-right" @click.prevent="next()">Next</button>
    </div>
</template>

<script>

import { mapMutations } from 'vuex';

export default {
    methods: {
        ...mapMutations([
        'prev',
        'next'
        ])
    }
}
</script>


