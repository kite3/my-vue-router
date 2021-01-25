<script>
export default {
  props: {
    to: String,
    tag: {
      type: String,
      default: 'a'
    }
  },
  methods: {
    onClick() {
      this.$router.push(this.to)
    }
  },
  render() {
    return (
      <this.tag onClick={this.onClick} href='javascript:;'>
        {this.$slots.default}
      </this.tag>
    )
  }
}
</script>
