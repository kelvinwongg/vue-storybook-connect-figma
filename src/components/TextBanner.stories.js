import TextBanner from './TextBanner';

export default {
	title: 'Example/TextBanner',
	component: TextBanner,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/s2DRcsFSL3S1Za936rYBWJ/Figma-Connect-1?node-id=0%3A1'
		}
	}
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { TextBanner },
	template:
		'<text-banner v-bind="$props" />',
});

export const BannerOne = Template.bind({});
BannerOne.args = {
	text: 'Banner ONE',
};

export const BannerTwo = Template.bind({});
BannerTwo.args = {
	text: 'Banner TWO',
};
