<template>
    <div>
        <v-card
            class="mx-auto book-card"
            elevation="2"
        >
            <v-card-title>
                <span>{{ shelf.title }}</span>
            </v-card-title>
            <v-card-text>
                <span class="pa-2">Número de livors:
                    <span class="font-weight-medium ml-1">{{ shelf.volumeCount }}
                    </span>
                </span>
            </v-card-text>

            <VerDetalhe :url="VerDetalheUrl" />
        </v-card>
    </div>
</template>

<script>
    import VerDetalhe from '../navigation/VerDetalhe.vue';

    export default {
        name: 'LibraryItem',
        components: {
            VerDetalhe,
        },
        props: {
            shelf: { type: Object, required: true },
        },
        computed: {
            VerDetalheUrl() {
                return `/library/${this.shelf.id}`;
            },
        },
    };
</script>

<style scoped>
    .book-card{
        height: 100%;
    }
</style>
