export const pageAnimation =
{
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.5,
            when: 'beforeChildren',
            staggerChildren: 0.2
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5
        }
    }
}

export const fade =
{
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { ease: 'easeOut', duration: 0.75 }
    }
}