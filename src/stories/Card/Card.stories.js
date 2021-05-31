import React from "react";

import CustomCard from "../../components/Card/Card";

export default {
  title: "Component/Card",
  component: CustomCard,
};
const Template = (args) => <CustomCard {...args} />;
export const CardComponent = Template.bind({});
CardComponent.args = {
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  summary:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies, tortor quis rhoncus mattis, nisi enim placerat leo, nec porta lectus nibh in erat. Sed mauris ipsum",
  thumbnail:
    "https://images.newindianexpress.com/uploads/user/imagelibrary/2019/3/7/w600X390/Take_in_the_Scenery.jpg",
  tag: "nature",
  targetlabel: "Learn More",
  altText: "Nature",
};
