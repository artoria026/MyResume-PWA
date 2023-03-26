import Link from 'next/link';
import Image from 'next/image';

const Skills = () => (
  <div className="bg-[url('/assets/illustrations/details.svg')] bg-contain bg-no-repeat bg-left-top" id="about">
    <div className="container py-16 flex flex-col lg:flex-row justify-between items-center">
      <div className="flex-none lg:flex-1">
        <Image
          src="/assets/illustrations/skills.svg"
          alt="I’m John and I’m a Backend & Devops engineer!"
          width={447}
          height={326}
        />
      </div>
      <div className="flex-none lg:flex-1 pl-0 lg:pl-8">
        <h2 className="mb-8 text-3xl font-bold text-brand-primary dark:text-white typography">More about me</h2>
        <p className="mb-[2.5rem] font-normal text-xl md:text-[26px] text-brand-secondary dark:text-slate-200 leading-[34px] typography">
				Software Developer with expertise in design, installation, testing
				and maintenance of software systems. Equipped with a diverse and
				promising skill-set. Proficient in various platforms, languages, and
				embedded systems. Experienced with cutting-edge development tools
				and procedures. Able to effectively self-manage during independent
				projects, as well as collaborate as part of a productive team.
        </p>
        <Link href="#contact" className="button button-primary">
          Hire me
        </Link>
      </div>
    </div>
  </div>
);

export default Skills;
