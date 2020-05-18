<template>
    <v-card
        class="mx-auto book-card"
        elevation="2"
    >
        <div
            v-if="book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail"
            class="text-center pt-3"
        >
            <img
                :src="book.volumeInfo.imageLinks.smallThumbnail"
                :alt="book.volumeInfo.title"
            >
        </div>
        <v-card-title>
            <span>{{ book.volumeInfo.title.substring(0,maxTitleLength) }}</span>
            <span v-if="book.volumeInfo.title.length > maxTitleLength">...</span>
        </v-card-title>
        <v-card-text>{{ book.volumeInfo.subtitle || 'Sem descrição.' }}</v-card-text>
        <v-card-actions>
            <VerDetalhe :url="VerDetalheUrl" />

            <v-btn
                v-if="book.volumeInfo.previewLink"
                text
                small
                color="secondary"
                @click="goToPreview(book)"
            >
                Ver Preview
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import bookService from './bookService';
    import VerDetalhe from '../navigation/VerDetalhe.vue';

    export default {
        name: 'BookItem',
        components: {
            VerDetalhe,
        },
        mixins: [bookService],
        props: {
            book: { type: Object, required: true },
        },
        data() {
            return {
                maxTitleLength: 20,
            };
        },
        computed: {
            VerDetalheUrl() {
                return `/book/${this.book.id}`;
            },
        },
    };
</script>

<style scoped>
    .book-card{
        height: 100%;
    }
</style>
