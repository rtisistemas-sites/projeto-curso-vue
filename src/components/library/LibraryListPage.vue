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
                    <h5 class="headline display-1 text-uppercase">Estantes</h5>
                </v-col>
            </v-row>

            <LibraryList />
        </v-container>
    </div>
</template>

<script>
    import LibraryList from './LibraryList.vue';

    export default {
        name: 'LibraryListPage',
        components: {
            LibraryList,
        },
    };
</script>
