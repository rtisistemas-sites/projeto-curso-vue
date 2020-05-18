<template>
    <div>
        <v-container fluid>
            <v-row>
                <v-col
                    cols="12"
                    md="4"
                    sm="4"
                    lg="3"
                >
                    <h5 class="headline display-1 text-uppercase">Livros</h5>
                </v-col>
            </v-row>

            <BookList />
        </v-container>
    </div>
</template>

<script>
    import BookList from './BookList.vue';

    export default {
        name: 'BookListPage',
        components: {
            BookList,
        },
    };
</script>
