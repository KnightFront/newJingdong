<template>
  <div>
    <div class="wrapper">
      <StaticPart/>
      <Nearby/>
    </div>
    <Docker/>
  </div>
</template>
<script>
import StaticPart from './StaticPart'
import Nearby from './Nearby'
import Docker from './Docker'
export default {
  name: 'Home',
  components: { StaticPart, Nearby, Docker }
}
</script>
<style lang="scss" scoped>
  @import '../../style/viriables';
  @import '../../style/mixin.scss';
  .wrapper {
    position: absolute;
    overflow-y: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0.5rem;
    padding: 0 .18rem .1rem .18rem;
  }
</style>
