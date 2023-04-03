export default {
    template: `
        <li>
            <label>
                {{ assignement.name }}

                <input type="checkbox" v-model="assignement.complete" />
            </label>
        </li>
    `,

    props: {
        assignement: Object
    }
}