<template>
  <div class="pz-comments-container" id="comments">
    <comment-form-btn></comment-form-btn>
    <div class="pz-comments" v-if="comments.length > 0">
      <comment v-for="comment in comments" :comment="comment"></comment>
    </div>
  </div>
</template>

<script>
import Comment from './Comment'
import CommentFormBtn from './CommentFormBtn'
import { mapGetters } from 'vuex'
import orderedComments from '../scripts/orderedComments'
export default {
  components: {
    CommentFormBtn,
    Comment
  },
  computed: {
    comments () {
      return orderedComments(this.allComments, this.$route.params.entry)
    },
    ...mapGetters([
      'allComments'
    ])
  }
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.pz-comments-container
  max-width 40rem
  margin 0 auto
  margin-bottom 0.5rem

@media screen and (min-width: 360px)
  .pz-comments-container
    margin-bottom 1rem

@media screen and (min-width: 414px)
  .pz-comments-container
    margin-bottom 2rem

  .pz-comments
    background #fff
    padding 0 0.5rem

@media screen and (min-width: 768px)
  .pz-comments-container
    margin-bottom 3rem

    width 90vw
    max-width 100%

  .pz-comments
    padding-bottom 0.75rem

@media screen and (min-width: 1024)
  .pz-comments
    padding-bottom 1rem

@media screen and (min-width: 1280px)
  .pz-comments
    padding-bottom 2rem
</style>
