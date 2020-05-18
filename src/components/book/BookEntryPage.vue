<template>
    <v-container fluid>
        <BackButton />

        <v-row v-if="book && book.volumeInfo">
            <v-col
                class="text-center"
                cols="12"
                md="3"
                sm="4"
            >
                <BookEntryImage :book="book" />
            </v-col>
            <v-col
                cols="12"
                md="9"
                sm="8"
            >
                <BookEntryData :book="book" />

                <BookEntryAuthors :book="book" />

                <BookEntryCategories :book="book" />

                <BookEntryActions :book="book" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import bookService from './bookService';
    import BackButton from '../navigation/BackButton.vue';
    import BookEntryImage from './BookEntryImage.vue';
    import BookEntryData from './BookEntryData.vue';
    import BookEntryAuthors from './BookEntryAuthors.vue';
    import BookEntryCategories from './BookEntryCategories.vue';
    import BookEntryActions from './BookEntryActions.vue';
    import api from '../api/api';

    export default {
        name: 'BookEntryPage',
        components: {
            BackButton,
            BookEntryImage,
            BookEntryData,
            BookEntryAuthors,
            BookEntryCategories,
            BookEntryActions,
        },
        mixins: [
            bookService,
            api,
        ],
        data() {
            return {
                book: {},
            };
        },
        created() {
            this.get(`/volumes/${this.$route.params.id}`).then((response) => {
                this.book = response.data;
            });
        },
    };
</script>
