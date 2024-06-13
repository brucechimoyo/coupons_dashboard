export interface topcard {
    bgcolor: string,
    icon: string,
    title: string,
    subtitle: string
}

export const topcards: topcard[] = [

    {
        bgcolor: 'success',
        icon: 'bi bi-droplet',
        title: '467.80L',
        subtitle: 'Weekly Fuel Dispensed'
    },
    {
        bgcolor: 'info',
        icon: 'bi bi-ticket-detailed',
        title: '56',
        subtitle: 'Weekly Fuel Coupons'
    },
    {
        bgcolor: 'warning',
        icon: 'bi bi-people',
        title: '42',
        subtitle: 'Total Clients Registered'
    },
    {
        bgcolor: 'info',
        icon: 'bi bi-forward',
        title: '9',
        subtitle: 'Weekly Fuel Orders'
    },
    {
        bgcolor: 'warning',
        icon: 'bi bi-person-fill',
        title: '123',
        subtitle: 'Registered Employees'
    },
    {
        bgcolor: 'primary',
        icon: 'bi bi-fuel-pump',
        title: '123',
        subtitle: 'Filling Stations'
    },

] 