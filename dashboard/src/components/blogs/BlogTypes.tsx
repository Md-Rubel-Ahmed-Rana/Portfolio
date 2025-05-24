import { Form, Select } from "antd/lib";

const { Option } = Select;

const BlogTypes = () => {
  return (
    <Form.Item
      label="Type"
      name="type"
      rules={[{ required: true, message: "Select a type" }]}
    >
      <Select placeholder="Select blog type" showSearch>
        <Option value="Tutorial">Tutorial</Option>
        <Option value="Tips">Tips</Option>
        <Option value="Web Development">Web Development</Option>
        <Option value="Lifestyle">Lifestyle</Option>
        <Option value="Travel">Travel</Option>
        <Option value="Health">Health</Option>
        <Option value="Fitness">Fitness</Option>
        <Option value="Finance">Finance</Option>
        <Option value="Personal Development">Personal Development</Option>
        <Option value="Productivity">Productivity</Option>
        <Option value="Technology">Technology</Option>
        <Option value="Programming">Programming</Option>
        <Option value="Career Advice">Career Advice</Option>
        <Option value="Education">Education</Option>
        <Option value="Marketing">Marketing</Option>
        <Option value="SEO">SEO</Option>
        <Option value="Design">Design</Option>
        <Option value="UI/UX">UI/UX</Option>
        <Option value="Photography">Photography</Option>
        <Option value="Food">Food</Option>
        <Option value="Recipes">Recipes</Option>
        <Option value="Parenting">Parenting</Option>
        <Option value="Relationships">Relationships</Option>
        <Option value="Fashion">Fashion</Option>
        <Option value="Beauty">Beauty</Option>
        <Option value="Entertainment">Entertainment</Option>
        <Option value="Gaming">Gaming</Option>
        <Option value="Books">Books</Option>
        <Option value="Art">Art</Option>
        <Option value="Culture">Culture</Option>
        <Option value="Business">Business</Option>
        <Option value="Startups">Startups</Option>
        <Option value="News">News</Option>
        <Option value="Politics">Politics</Option>
        <Option value="Science">Science</Option>
        <Option value="Psychology">Psychology</Option>
        <Option value="Spirituality">Spirituality</Option>
        <Option value="Self Improvement">Self Improvement</Option>
        <Option value="Pets">Pets</Option>
        <Option value="DIY">DIY</Option>
        <Option value="Crafts">Crafts</Option>
        <Option value="Automotive">Automotive</Option>
        <Option value="Real Estate">Real Estate</Option>
        <Option value="Finance">Finance</Option>
        <Option value="Cryptocurrency">Cryptocurrency</Option>
        <Option value="Investing">Investing</Option>
        <Option value="Sustainability">Sustainability</Option>
      </Select>
    </Form.Item>
  );
};

export default BlogTypes;
