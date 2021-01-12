<template>

  <div class="single-post-page">

    <section class="post">

      <h1 class="post-title">
        {{ loadedPost.title }}
      </h1>

      <div class="post-details">

        <div class="post-detail">
          Last updated on {{ loadedPost.updatedDate }}
        </div>

        <div class="post-detail">
          Written by {{ loadedPost.author }}
        </div>

      </div>

      <p class="post-content">
        {{ loadedPost.content }}
      </p>

    </section>

    <section class="post-feedback">

      <p>

        Let me know what you think about the post, send an email to

        <a href="mailto:alejandrorodarte1@gmail.com">
          mailto:alejandrorodarte1@gmail.com
        </a>

      </p>

    </section>

  </div>

</template>

<script>
export default {

  asyncData(ctx) {

    return new Promise((res, rej) => {

      setTimeout(() => {

        res({

          loadedPost: {
            id: '1',
            title: `First post (id: ${ ctx.route.params.id })`,
            previewText: 'Super cool first post!',
            author: 'Alex',
            updatedDate: new Date(),
            content: 'Some dummy text content for this super awesome first post',
            thumbnail: 'https://prod-discovery.edx-cdn.org/media/course/image/efc25613-f0ea-4423-bfcd-4d94c317f085-5dd84e82e22b.small.png'
          }

        });

    }, 1000);

    })
    .then(data => data)
    .catch(e => ctx.error(e));

  }

}
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
