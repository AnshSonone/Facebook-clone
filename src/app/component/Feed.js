import Story from './Story.js';
import InputBox from './InputBox.js';
import Widget from './Widget.js';
import Post from './Post.js';

export default function Feed() {
	return (
		<div className='absolute left-[19%] top-[3%] sm:top-[4%] w-fit '>
			<Story/>
			<InputBox/>
			<Widget/>
			<Post/>
		</div>
	)
}
