import TextBanner from './TextBanner';

export default {
	title: 'Example/TextBanner',
	component: TextBanner,
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
