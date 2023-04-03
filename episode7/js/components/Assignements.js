import AssignementList from "./AssignementList.js";

export default {
    components: {
        AssignementList
    },
    template: `
        <section class="space-y-6">
            <assignement-list :assignements="filters.inProgress" title="In Progress"></assignement-list>
            <assignement-list :assignements="filters.completed" title="Completed"></assignement-list>
        </section>
    `,

    data() {
        return {
            assignements: [
                { name: 'Finish project', complete: false, id: 1 },
                { name: 'Read chapter 4', complete: false, id: 2 },
                { name: 'Turn in homework', complete: false, id: 3 }
            ]
        };
    },
    computed: {
        filters() {
            return {
                inProgress: this.assignements.filter(assignement => ! assignement.complete),
                completed: this.assignements.filter(assignement => assignement.complete)
            };
        }
    }
}