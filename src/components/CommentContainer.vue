<template>
  <div class="pz-comment-container">
    <comment-body :comment="comment"></comment-body>
    <menu class="pz-comment-menu">
      <a @click="setPopupVisible(true)"><i class="fa fa-ellipsis-h"></i></a>
      <div class="divider"></div>
      <a v-if="!limit" @click="authenticatedReply">
        <i class="fa fa-reply"></i>
      </a>
      <div class="divider"></div>
      <div class="score">
        <a :class="upClass" @click="upvote">
          <i class="fa fa-chevron-up"></i>
        </a>
        <span class="value" :title="detailedScore">
          {{ score }}
        </span>
        <a :class="downClass" @click="downvote">
          <i class="fa fa-chevron-down"></i>
        </a>
      </div>
    </menu>
    <div class="pz-popup-background" v-show="popupVisible" @click="setPopupVisible(false)">
    </div>
    <div class="pz-popup-wrapper">
      <menu class="pz-comment-menu-popup" v-show="popupVisible">
        <!--<a>Share</a>-->
        <router-link :to="permalink">Permalink</router-link>
        <template v-if="myComment">
          <a @click="edit">Edit</a>
          <a @click="remove">Delete</a>
        </template>
      </menu>
    </div>
  </div>
</template>

<script>
import CommentBody from './CommentBody'
import firebase from 'firebase'
import { mapGetters } from 'vuex'
export default {
  name: 'comment-container',
  components: {
    CommentBody
  },
  computed: {
    nestLimitReached () {
      return true
    },
    upClass () {
      if (this.sessionVotes[this.comment.id] === 1) { return 'vote-up active' }
      return 'vote-up'
    },
    downClass () {
      if (this.sessionVotes[this.comment.id] === -1) { return 'vote-down active' }
      return 'vote-down'
    },
    myComment () {
      let user = firebase.auth().currentUser
      if (user && user.email === this.comment.userId) {
        return true
      } else {
        return false
      }
    },
    detailedScore () {
      let comment = this.comment
      let percentage =
        Math.round(100 * (comment.upvotes / (comment.upvotes + comment.downvotes)))
      return `${comment.upvotes} up / ${comment.downvotes} down (${percentage}% like it)`
    },
    score () {
      return this.comment.upvotes - this.comment.downvotes
    },
    permalink () {
      return `/blog/${this.$route.params.entry}/${this.comment.id}`
    },
    ...mapGetters(['sessionUser', 'sessionVotes'])
  },
  data () {
    return {
      popupVisible: false
    }
  },
  methods: {
    setPopupVisible (val) {
      this.popupVisible = val
    },
    authenticatedReply () {
      // console.log('setting up reply...')
      this.$store.commit('setNewCommentPostId', this.$route.params.entry)
      this.$store.commit('setNewCommentParentId', this.comment.id)
      this.$store.commit('setNewCommentParent', this.comment)
      if (!this.sessionUser.email) {
        this.$store.commit('setSessionRequest', '/comment/new')
        this.$router.push('/signup')
      } else {
        this.$router.push('/comment/new')
      }
    },
    edit () {
      this.$store.commit('setEditComment', this.comment)
      this.$router.push('/comment/edit')
    },
    remove () {
      this.$store.commit('removeComment', this.comment.id)
      this.setPopupVisible(false)
    },
    authenticate () {
      this.$store.commit('setSessionRequest', this.$route.path + '#comments')
      this.$router.push('/signup')
    },
    upvote () {
      if (!firebase.auth().currentUser) { this.authenticate(); return }
      if (this.sessionVotes[this.comment.id] === 1) {
        // console.log('already upvoted, undoing')
        this.$store.commit('undoUpvoteComment', this.comment.id)
        this.$store.commit('sessionClearVoteComment', this.comment.id)
        return
      } else {
        this.$store.commit('upvoteComment', this.comment.id)
        this.$store.commit('sessionUpvoteComment', this.comment.id)
      }
    },
    downvote () {
      if (!firebase.auth().currentUser) { this.authenticate(); return }
      if (this.sessionVotes[this.comment.id] === -1) {
        // console.log('already downvoted')
        this.$store.commit('undoDownvoteComment', this.comment.id)
        this.$store.commit('sessionClearVoteComment', this.comment.id)
        return
      } else {
        this.$store.commit('downvoteComment', this.comment.id)
        this.$store.commit('sessionDownvoteComment', this.comment.id)
      }
    }
  },
  props: ['limit', 'comment']
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.pz-comment-container
  max-width 50rem

.pz-comment-menu
  display flex
  flex-flow row nowrap
  justify-content flex-end

  font-size 0.75rem
  color light

  .divider
    border-right 1px solid lighten(bc,50%)

  a
    padding 0 0.75rem
    color light
    cursor pointer
    &:hover
      color link

  .score
    display flex

    a.vote-up
      padding-left 0.5rem
      &:hover
        color hsl(20,50%,75%)
      &.active
        color hsl(20,100%,50%)

    a.vote-down
      padding-right 0.5rem
      &:hover
        color hsl(200,50%,75%)
      &.active
        color hsl(200,100%,50%)

    .value
      flex 1
      text-align center
      font-weight 500
      min-width 1.75rem

.pz-popup-background
  position fixed
  top 0
  left 0
  width 100vw
  height 100vh
  // background hsla(0,100%,50%,0.15)
  z-index 100

.pz-popup-wrapper
  position relative

.pz-comment-menu-popup
  position absolute
  top 0.5rem
  right 0
  width 10rem
  background #fff
  box-shadow hsla(0,0,0,0.15) 0 0.15rem 0.333rem

  z-index 101

  font-size 0.875rem
  a
    display block
    color txt
    border-bottom 1px solid bc
    padding 0 0.75rem
    line-height 2rem
    cursor pointer
    user-select none

    &:hover
      background link
      color #fff
    &:last-of-type
      border-bottom none

@media screen and (min-width: 360px)
  .pz-comment-menu
    font-size 0.85rem
    .score
      a.vote-up
        padding-left 0.75rem
      a.vote-down
        padding-right 0.75rem

  .pz-comment-menu-popup
    font-size 1rem
    a
      padding 0 1rem
</style>
