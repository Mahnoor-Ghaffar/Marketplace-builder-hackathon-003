import Image from 'next/image'
import React from 'react'
import user1 from '@/../public/assets/Homepage/team-1-user-3-2.jpg'
import user2 from '@/../public/assets/Homepage/team-1-user-1-3.jpg'
import user3 from '@/../public/assets/Homepage/team-1-user-1-2.jpg'
import fbIcon from '@/../public/assets/Homepage/ant-design_facebook-filled.png'
import twittericon from '@/../public/assets/Homepage/twitter.png'
import instaIcon from '@/../public/assets/Homepage/Vector-01.png'

const AboutCards = () => {
  return (
        <section className="relative bg-white py-16">
          <div className="container mx-auto flex flex-col items-center gap-16 px-4">
            {/* Heading */}
            <div className="text-center max-w-lg">
              <h2 className="text-4xl font-bold text-[#252B42]">
                Meet Our Team
              </h2>
              <p className="text-base text-[#737373] mt-4">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
            </div>

            {/* Team Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Card 1 */}
              <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="w-full h-[230px] relative">
                  <Image
                    src={user1}
                    alt="Team Member 1"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 text-center">
                  <h5 className="text-xl font-bold text-[#252B42]">Emily Rose</h5>
                  <h6 className="text-sm font-semibold text-[#737373]">
                    Software Engineer
                  </h6>
                  {/* Social Media */}
                  <div className="flex justify-center gap-4 mt-4">
                    <Image
                      src={fbIcon}
                      alt="Facebook"
                      className="w-6 h-6"
                    />
                    <Image
                      src={instaIcon}
                      alt="Instagram"
                      className="w-6 h-6"
                    />
                    <Image
                      src={twittericon}
                      alt="Twitter"
                      className="w-6 h-6"
                    />
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="w-full h-[230px] relative">
                  <Image
                    src={user2}
                    alt="Team Member 2"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 text-center">
                  <h5 className="text-xl font-bold text-[#252B42]">
                    Jane Smith
                  </h5>
                  <h6 className="text-sm font-semibold text-[#737373]">
                    Marketing Head
                  </h6>
                  <div className="flex justify-center gap-4 mt-4">
                    <Image
                      src={fbIcon}
                      alt="Facebook"
                      className="w-6 h-6"
                    />
                    <Image
                      src={instaIcon}
                      alt="Instagram"
                      className="w-6 h-6"
                    />
                    <Image
                      src={twittericon}
                      alt="Twitter"
                      className="w-6 h-6"
                    />
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="w-full h-[230px] relative">
                  <Image
                    src={user3}
                    alt="Team Member 3"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 text-center">
                  <h5 className="text-xl font-bold text-[#252B42]">
                    John Doe
                  </h5>
                  <h6 className="text-sm font-semibold text-[#737373]">
                    UI/UX Designer
                  </h6>
                  <div className="flex justify-center gap-4 mt-4">
                    <Image
                      src={fbIcon}
                      alt="Facebook"
                      className="w-6 h-6"
                    />
                    <Image
                      src={instaIcon}
                      alt="Instagram"
                      className="w-6 h-6"
                    />
                    <Image
                      src={twittericon}
                      alt="Twitter"
                      className="w-6 h-6"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Heading */}
            <div className="text-center max-w-lg">
              <h2 className="text-4xl font-bold text-[#252B42]">
                Big Companies Are Here
              </h2>
              <p className="text-base text-[#737373] mt-4">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
            </div>


          </div>
        </section>

  )
}

export default AboutCards