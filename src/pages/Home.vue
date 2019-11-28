<template>
  <div>
    <hero />
    <section class="posts">
      <div class="container">
        <div class="posts-type">Latest Posts</div>
        
        <exchange-list/>
      </div>
    </section>
    <pagination />
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import Pagination from '@/components/Pagination'
import ExchangeList from '@/components/exchange/ExchangeList'



export default {
  name: 'app',
  components: {
    Hero,
    Pagination,
    ExchangeList
  },
 
  
}
</script>
