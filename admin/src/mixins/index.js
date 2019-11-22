export const commonMixin = {
  computed: {
    uploadUrl() {
      return this.$http.defaults.baseURL + '/upload';
    },
    authHeaders() {
      return {
        Authorization: `Bearer ${localStorage.token || ''}`
      }
    }
  }
}