<template>
    <div>
        <div
            v-if="book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail"
        >
            <img
                :src="book.volumeInfo.imageLinks.thumbnail"
                :alt="book.volumeInfo.title"
            >
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BookEntryImage',
        props: {
            book: {
                type: Object,
                required: true,
            },
        },
    };
</script>
