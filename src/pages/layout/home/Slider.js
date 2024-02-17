import { getSlider } from '../../../api/slider';
import slideFn from '../../../scripts/slideFn';
import { useEffect } from '../../../utilities';

const Slider = async () => {
    const { data } = await getSlider();

    useEffect(() => {
        slideFn();
    });

    return `
<section class="w-full relative top-0">
    <div class="w-full relative overflow-hidden">
        <div class="slider_main w-full flex relative transition-all duration-200 ease-linear">
            ${data
                .map(
                    item => `<div class="slider_item w-full h-full select-none flex flex-grow flex-shrink-0">
                <a href=""><img src="./src/assets/images/${item}" alt="" class="max-w-full object-cover"></a>
            </div>`
                )
                .join('')}
        </div>
    </div>
</section>
`;
};

export default Slider;
