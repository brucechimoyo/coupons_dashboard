export interface Feed {
    class: string,
    icon: string,
    task: string,
    time: string
}

export const Feeds: Feed[] = [

    {
        class: 'bg-info',
        icon: 'bi bi-forward',
        task: 'You have 4 fuel orders.',
        time: 'Just Now'
    },
    {
        class: 'bg-success',
        icon: 'bi bi-person-fill',
        task: '2 employees were recently registered',
        time: '2 Min ago'
    },
    {
        class: 'bg-warning',
        icon: 'bi bi-fuel-pump',
        task: '5 filling stations were recently added',
        time: '31 May'
    },

] 