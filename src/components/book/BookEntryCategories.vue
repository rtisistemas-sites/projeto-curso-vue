<template>
    <div>
        <div
            v-if="book.volumeInfo.categories && book.volumeInfo.categories.length"
            class="pb-4"
        >
            <v-subheader class="mt-4">Categorias</v-subheader>
            <v-divider class="mb-2" />
            <v-chip
                v-for="(category, i) in book.volumeInfo.categories"
                :key="i"
                class="ma-1 mr-3"
            >
                {{ category }}
            </v-chip>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BookEntryCategories',
        props: {
            book: {
                type: Object,
                required: true,
            },
        },
    };
</script>
