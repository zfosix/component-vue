<template>
  <div class="row-service">
    <Card v-for="item in data" :title="item.title" :description="item.description">
      <p>{{ item.date }}</p>
    </Card>
  </div>
  <MyBtn id="btn1" name="btn"></MyBtn>
  <MyBtn id="btn2" name="btn"></MyBtn>
</template>
<script>
import Card from '@/components/my-component/Card.vue';
export default {
  components: {
    Card,
    'card-service': Card
  },
  data() {
    return {
      data: [
        {
          title: 'Hello nama saya Fajar Fauzian',
          description: 'Saya dari sekolah SMK Wikrama Bogor, dengan jurusan PPLG(Pengembangan Perangkat Lunak Dan Gim)',
          date: '6 December 2006'
        },
        {
          title: 'Hello nama saya Anton Witjaksono',
          description: 'Saya dari sekolah SMK Wikrama Bogor, dengan jurusan PPLG(Pengembangan Perangkat Lunak Dan Gim)',
          date: '1 Mey 2006'
        }
      ]
    }
  }
}
</script>
<style>
.row-service
{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}

.btn-service-global
{
  margin-bottom: 30px;
  margin-top: 10px;
  font-size: 16px;
  font-weight: 400;
  color: white;
  background-color: rgb(23, 0, 128);
  padding: 15px 20px;
  border: none;
  border-radius: 5px;
}
</style>