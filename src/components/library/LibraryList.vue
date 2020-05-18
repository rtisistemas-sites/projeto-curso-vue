<template>
    <div>
        <Loading :condition="searchOnGoing">
            <v-row>
                <v-col
                    v-for="(shelf, index) in shelfList"
                    :key="index"
                    cols="12"
                    md="3"
                    sm="4"
                >
                    <LibraryItem :shelf="shelf" />
                </v-col>
            </v-row>
        </Loading>
    </div>
</template>

<script>
    import Loading from '../loading/Loading.vue';
    import LibraryItem from './LibraryItem.vue';
    import api from '../api/api';

    export default {
        name: 'LibraryList',
        components: {
            Loading,
            LibraryItem,
        },
        mixins: [api],
        data() {
            return {
                shelfList: [],
                searchOnGoing: false,
            };
        },
        created() {
            this.searchOnGoing = true;
            this.get(`/users/${this.$store.state.userId}/bookshelves`).then((response) => {
                this.shelfList = response.data.items;
                this.searchOnGoing = false;
            }).catch(() => {
                this.searchOnGoing = false;
            });
        },
    };
</script>
