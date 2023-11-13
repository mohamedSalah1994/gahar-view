<template>
    <div class="locale-changer">
    <box-icon name='world'></box-icon>

    <select v-model="$i18n.locale">
        <option  v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
    </select>
</div>
</template>
<script>
export default{}
</script>