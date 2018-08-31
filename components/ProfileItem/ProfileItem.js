export default {
  data() {
    return {
      userName: this.$store.state.userName,
      profileImage: this.$store.state.profileItem.profileImage,
      profileSites: this.$store.state.profileItem.profileSites
    }
  }
}
