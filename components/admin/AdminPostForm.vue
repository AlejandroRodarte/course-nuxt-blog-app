<template>
  <!-- signup/signin form -->
  <form @submit.prevent="onSave">
    <app-control-input v-model="editedPost.author">
      Author Name
    </app-control-input>
    <app-control-input v-model="editedPost.title">
      Title
    </app-control-input>
    <app-control-input v-model="editedPost.thumbnail">
      Thumbnail Link
    </app-control-input>
    <app-control-input
      control-type="textarea"
      v-model="editedPost.content"
    >
      Content
    </app-control-input>
    <app-control-input
      control-type="textarea"
      v-model="editedPost.previewText"
    >
      PreviewText
    </app-control-input>
    <!-- submit form -->
    <app-button>
      Save
    </app-button>
    <!-- cancel operation -->
    <app-button
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel"
    >
      Cancel
    </app-button>
  </form>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  data() {
    // if post prop exists (edit), populate form; if undefined, set empty values
    const editedPost = this.post ? { ...this.post } : {
      author: '',
      title: '',
      thumbnail: '',
      content: '',
      previewText: ''
    };
    return { editedPost };
  },
  methods: {
    onSave() {
      // submit form; emit data to parent
      this.$emit('submit', {
        ...this.editedPost,
        updatedDate: new Date()
      });
    },
    onCancel() {
      // cancel operation: go back
      this.$router.push('/admin');
    }
  }
}
</script>
