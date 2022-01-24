import AnimatedCursor from 'react-animated-cursor'

const CustomCursor = () => 
{
    return (
        <AnimatedCursor 
        innerSize={10}
        outerSize={10}
        color='236, 187, 51'
        outerAlpha={0.2}
        innerScale={1}
        outerScale={5}
        />
    )
}
 
export default CustomCursor