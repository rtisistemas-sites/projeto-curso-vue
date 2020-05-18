<template>
    <div fluid>
        <v-row>
            <v-col cols="12">
                <v-card
                    elevation="2"
                    shaped
                    class="pa-3"
                >
                    <SearchInputField @search="doSearch" />
                </v-card>
            </v-col>
        </v-row>

        <v-row
            v-if="!bookList.length"
            justify="center"
        >
            <v-col
                cols="12"
                md="4"
                class="text-center"
            >
                <p class="overline">Digite algo para iniciar a pesquisa</p>
            </v-col>
        </v-row>

        <Loading :condition="searchOnGoing">
            <v-row>
                <v-col
                    v-for="(book, index) in bookList"
                    :key="index"
                    cols="12"
                    md="3"
                    sm="4"
                >
                    <BookItem :book="book" />
                </v-col>
            </v-row>
        </Loading>
    </div>
</template>

<script>
    import Loading from '../loading/Loading.vue';
    import SearchInputField from '../search/SearchInputField.vue';
    import BookItem from './BookItem.vue';
    import api from '../api/api';

    export default {
        name: 'BookList',
        components: {
            Loading,
            SearchInputField,
            BookItem,
        },
        mixins: [api],
        data() {
            return {
                bookList: [],
                searchOnGoing: false,
            };
        },
        methods: {
            doSearch(textSearch) {
                if (!textSearch) {
                    this.bookList = [];
                } else {
                    this.searchOnGoing = true;
                    this.get(`/volumes?q=${textSearch}`).then((response) => {
                        this.bookList = response.data.items;
                        this.searchOnGoing = false;
                    }).catch(() => {
                        this.searchOnGoing = false;
                    });
                }
            },
        },
    };
</script>
