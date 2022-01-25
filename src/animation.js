export const pageAnimation =
{
    hidden: {
        opacity: 0,
        x: 100
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4,
            ease: 'easeIn'
        }
    },
    exit: {
        opacity: 0,
        x: -100,
        transition: {
            duration: 0.6,
            ease: 'easeOut'
        }
    }
}