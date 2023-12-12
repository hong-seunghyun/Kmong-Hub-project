import React, { Component, useState } from "react";
import Layout from "/src/components/layout/app/main-index";
import Icon from "/src/components/icon/icon.tsx";
import Link from "next/link"
class App extends Component {
	
	
	render() {
		const AccordionMenu = [
			{
				index: 0,
				title: "한국기술HUB는 어떤 서비스를 제공하나요?",
				content: "케한국기술HUB는 AI 기반의 기술 중개 플랫폼을 제공합니다. 기술 이전, 행사, 뉴스, 지원사업 등 다양한 콘텐츠 업로드와 관리를 지원하며, 기술이전 요청이 들어오면 상담부터 미팅, 계약, 그리고 사후관리에 이르는 모든 과정을 체계적으로 관리할 수 있는 기능을 제공합니다.",

			},
			{
				index: 1,
				title: "어떤 방식으로 콘텐츠를 업로드하나요?",
				content: "사용자가 업로드하려는 기술 문서를 선택하면, AI가 해당 문서를 분석하여 콘텐츠를 생성합니다. 생성된 콘텐츠는 사용자가 검토 및 수정한 후, 웹사이트에 업로드할 수 있습니다. 이러한 과정을 통해, 기술 정보를 쉽고 효율적으로 공유할 수 있습니다.",

			},
			{
				index: 2,
				title: "기술 문서 이외의 콘텐츠도 업로드 가능한가요?",
				content: "네, 가능합니다. 행사, 뉴스, 지원사업 등 다양한 종류의 콘텐츠 업로드를 지원하고 있습니다. 각각의 콘텐츠 형식에 맞게 AI가 최적화된 콘텐츠를 생성하여 업로드할 수 있습니다.",

			},
			{
				index: 3,
				title: "디자인 커스터마이징은 가능한가요?",
				content: "네, 가능합니다. 한국기술HUB는 사용자 맞춤형 디자인을 제공하며, 이를 위해 다양한 스킨을 선택하거나, 필요에 따라 한국기술HUB 개발팀과 협업하여 개별적인 디자인을 제작할 수 있습니다.",

			},
			{
				index: 4,
				title: "한국기술HUB는 어떤 보안 체계를 가지고 있나요?",
				content: "한국기술HUB는 AWS(Amazon Web Services)를 이용하여 서비스를 제공하고 있습니다. AWS는 강력한 보안 체계와 국제적인 인증을 받은 데이터 센터를 가지고 있어, 사용자 데이터의 안전성을 보장합니다. 추가로, 저희는 자체적인 보안 프로토콜을 갖추고 있습니다. 정기적인 보안 감사를 통해 시스템의 취약점을 찾아내고, 이를 보완하는 과정을 거치고 있습니다. 또한, 개인정보 보호와 데이터 누출 등의 위협으로부터 서비스를 보호하기 위해 다양한 보안 기술과 방법을 활용하고 있습니다. 이렇게 하여, 사용자 분들이 안심하고 저희 서비스를 이용하실 수 있습니다.",

			},
		];
		

		const Accordion = ({ title, content, index }) => {
			const [activeIndex, setActiveIndex] = useState(-1);

			const handleAccordionClick = (index) => {
				setActiveIndex(index === activeIndex ? -1 : index);
			};

			const isActive = index === activeIndex;
		
			return (
				<div className="content-wrap">
					<span className={`flex_ ${isActive? "active" : ""}`} onClick={() => handleAccordionClick(index)}>
						<h3 className="headding-3-B">
							{title}
						</h3>
						<span className="flex_">
							<Icon icon="chevronDown" size={9} color="#757779" stroke="" />
						</span>
					</span>
					{isActive && <p className="accordion-content body-1-R txt-third">{content}</p>}
				</div>
			);
		};

		return(
				<Layout>
					<section id="main-section">
						<article className="main-section-01 bg-violet-6">
							
							<div className="section-01-01">
								<div className="main-section-01-pice-01 main-section-01-pice"/>
								<div className="main-section-01-pice-02 main-section-01-pice"/>
								<div className="main-section-01-pice-03 main-section-01-pice"/>

								<div className="content-box">
									<h1 className="display-1-R txt-violet-4">
										<span className="display-1-B txt-white">AI 기반 기술중개플랫폼, <br />
										한국기술HUB</span>에서 간편하게 만들어보세요!
									</h1>
									<p className="body-1-R txt-white">
										빛나는 아이디어가 기술혁신의 토대가 되고, <br />
										성실히 연구한 결과가 경제 성장의 씨앗으로 자라나는 순간
									</p>
									<div className="btn_ body-2-B txt-white">
										<Link href="/user/login">
											지금 시작하기
										</Link>
										
									</div>
								</div>
							</div>

							<div className="section-01-02">
								<img src="/images/img-main-01.png" alt="main-01" />
								<h1 className="display-3-R">
									<span className="display-3-B">
										단 몇 가지 설정으로 간편하게 <br />
										<span className="txt-violet-1">기술중개플랫폼</span>을 제작할 수 있습니다.
									</span>
								</h1>
							</div>

						</article>

						<article className="main-section-02">

							<div className="box-container">

								<div className="flex_ right_">
									<div className="img-box">
										<img src="images/img-main-02.png" alt="img-main-02"/>
									</div>
									<div className="text-box flex_">
										<h1 className="display-5-B">디자인 선택</h1>
										<h3 className="body-1-B txt-violet-1">
											독특하고 특별한 본인만의 플랫폼을 <br />
											만들어보세요.
										</h3>
										<p className="body-3-R txt-third">
											자신의 스타일을 표현하고 싶다면 다양한 스킨 중에서 선택하실 수 있습니다. 아직 원하는 스타일이 정해지지 않았다면, 한국기술HUB 개발팀과 협력하여 가장 적합한 커스터마이징 스킨을 제작하실 수 있습니다.
										</p>
									</div>
								</div>

								<div className="flex_ left_">
									<div className="img-box">
										<img src="images/img-main-03.png" alt="img-main-03"/>
									</div>
									<div className="text-box flex_">
										<h1 className="display-5-B">콘텐츠 업로드</h1>
										<h3 className="body-1-B txt-violet-1">
											AI 생성 기술을 활용하여 <br />
											쉽게 콘텐츠를 작성해보세요.
										</h3>
										<p className="body-3-R txt-third">
											복잡한 콘텐츠 작성에 대한 걱정은 더 이상 필요 없습니다! 기술이전, 행사, 뉴스, 지원사업 등 다양한 분야에 관련된 콘텐츠를 AI 생성 기술을 활용해 쉽게 생성하고 업로드하실 수 있습니다. 언제든지 정보를 풍성하게 제공하고, 쉽게 업데이트하실 수 있게 되었습니다.										
										</p>
									</div>
								</div>

								<div className="flex_ right_">
									<div className="img-box">
										<img src="images/img-main-04.png" alt="img-main-04"/>
									</div>
									<div className="text-box flex_">
										<h1 className="display-5-B">거래 관리</h1>
										<h3 className="body-1-B txt-violet-1">
											복잡한 관리 과정을 쉽게, <br />
											효율적으로 관리할 수 있어요.
										</h3>
										<p className="body-3-R txt-third">
											기술이전 요청이 들어올 때마다 고민되었던 관리 문제는 더 이상 문제가 되지 않습니다. 상담부터 미팅, 계약, 그리고 사후관리에 이르는 모든 과정을 효율적으로 관리할 수 있습니다. 복잡한 관리 과정을 단순화하고, 사용자 친화적인 인터페이스를 통해 모든 거래를 한 눈에 파악하실 수 있습니다.
										</p>
									</div>
								</div>

							</div>

						</article>

						<article className="main-section-03 bg-violet-6">
							<div className="box-container">
								<h1 className="display-3-R">
									<span className="display-3-B">AI 기술을 활용한<br /> 
									<span className="txt-violet-1">간편 콘텐츠</span></span> 업로드 방법
								</h1>
								
								<div>
									<div className="img-box">
										<img src="/images/img-main-05.png" alt="img-main-05" />
									</div>
									<div className="text-box flex_">

										<div>
											<p className="number_ body-3-R">
												1
											</p>
											<h3 className="heading-2-B">
												기술문서 선택
											</h3>
											<p className="body-3-R txt-third">
												업로드할 기술 문서<br />
												(논문, 특허, 보고서 등)를 선택합니다.
											</p>
										</div>

										<div>
											<p className="number_ body-3-R">
												2
											</p>
											<h3 className="heading-2-B">
												AI 생성
											</h3>
											<p className="body-3-R txt-third">
												AI가 선택한 문서를 분석하여<br />
												콘텐츠를 생성합니다.
											</p>
										</div>

										<div>
											<p className="number_ body-3-R">
												3
											</p>
											<h3 className="heading-2-B">
												검토 및 보완
											</h3>
											<p className="body-3-R txt-third">
												AI가 생성한 콘텐츠를 검토하고<br />
												 필요한 부분은 재생성을 요청합니다.
											</p>
										</div>

										<div>
											<p className="number_ body-3-R">
												4
											</p>
											<h3 className="heading-2-B">
												업로드
											</h3>
											<p className="body-3-R txt-third">
												검토가 완료된 콘텐츠를 <br />
												업로드합니다.
											</p>
										</div>

									</div>
								</div>

							</div>
						</article>

						<article className="main-section-04">
							<img src="/images/main-section-01-pice-03.png" className="main-section-02-pice-01 main-section-02-pice"/>
							<img src="/images/main-section-01-pice-03.png" className="main-section-02-pice-02 main-section-02-pice"/>

							<div className="box-container">
								<h1 className="display-3-R txt-violet-4">
									<span className="display-3-B txt-white">한국기술HUB</span>의 <br />
									<span className="display-3-B txt-white">차별화된 서비스</span>를 확인해보세요.
								</h1>
								<div className="flex_">

									<div className="box flex_">
										<Icon icon="content" size={24} stroke="" color="#574AFF" />
										<div>
											<h3 className="heading-1-B">
												기술문서 자동 수집
											</h3>
											<p className="body-3-R txt-third">
												AI "케미"가 다양한 사이트를 돌며 회원 기관의 기술문서를 신속하게 수집합니다. 이로써 수동적인 작업을 줄이고 더 많은 시간을 핵심 업무에 집중하실 수 있습니다.
											</p>
										</div>
									</div>

									<div className="box flex_">
										<Icon icon="document" size={26} stroke="#574AFF" color="#fff" />
										<div>
											<h3 className="heading-1-B">
												AI 생성 기술
											</h3>
											<p className="body-3-R txt-third">
												사용자가 업로드한 데이터를 바탕으로, AI가 콘텐츠를 자동으로 생성합니다. 이를 통해 정보의 품질과 정확성을 높일 수 있습니다.
											</p>
										</div>
									</div>

									<div className="box flex_">
										<Icon icon="researcher" size={22} stroke="" color="#574AFF" />
										<div>
											<h3 className="heading-1-B">
												연구자 관리
											</h3>
											<p className="body-3-R txt-third">
												연구원의 기술 역량과 기술이전 정보를 통합 관리할 수 있습니다. 이는 연구원의 전문성과 성과를 쉽게 파악하고 추적할 수 있게 합니다.
											</p>
										</div>
									</div>

									<div className="box flex_">
										<Icon icon="chatbot" size={24} stroke="#574AFF" color="none" />
										<div>
											<h3 className="heading-1-B">
												AI 챗봇
											</h3>
											<p className="body-3-R txt-third">
												특정 유료 스킨에는 AI 챗봇 기능이 제공되어 기술 수요기업이 챗봇과 상호작용하며 원하는 기술 정보를 쉽게 얻을 수 있습니다.
											</p>
										</div>
									</div>

									<div className="box flex_">
										<Icon icon="transaction" size={18} stroke="" color="#574AFF" />
										<div>
											<h3 className="heading-1-B">
												거래 관리
											</h3>
											<p className="body-3-R txt-third">
												기술이전 요청부터 계약, 그리고 사후관리에 이르는 모든 과정을 한눈에 볼 수 있도록 체계적으로 관리할 수 있습니다.											
											</p>
										</div>
									</div>

									<div className="box flex_">
										<Icon icon="marketing" size={21} stroke="" color="#574AFF" />
										<div>
											<h3 className="heading-1-B">
												마케팅 도구
											</h3>
											<p className="body-3-R txt-third">
												업로드한 콘텐츠를 기반으로 뉴스레터를 쉽게 제작하고, 이메일과 SMS를 통해 보낼 수 있습니다. 이를 통해 타깃 고객에게 적절한 메시지를 효과적으로 전달할 수 있습니다.
											</p>
										</div>
									</div>

								</div>
							</div>
						</article>

						<article className="main-section-05 bg-violet-6">
							<div className="box-container radius-20" >
								<h1 className="display-3-B">
									자주 묻는 질문
								</h1>
								{AccordionMenu.map((item, index) => (
									<Accordion
										key={index}
										title={item.title}
										content={item.content}
										index={index}
									/>
								))}
							</div>
						</article>

						<article className="main-section-06 bg-violet-6">
							<div className="section-bg-wrap bg-violet">
								<img src="/images/main-section-01-pice-03.png" className="main-section-06-pice-01 main-section-06-pice"/>
								<div className="box-container" >	
									<h1 className="display-5-R txt-violet-4">
										<span className="txt-white display-5-B">
											한국기술HUB와 함께라면,<br />
										</span>
										기술이 단순한 아이디어가 아닌,&nbsp;<span className="txt-white display-5-B">새로운 가치를 창출하는 힘이 됩니다.</span>
									</h1>
									<div className="btn_ body-2-B txt-white">
										지금 시작하기
									</div>
								</div>								
							</div>
						</article>

					</section>
				</Layout>
		)
	}
};
export default App;