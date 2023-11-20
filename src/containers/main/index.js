import React, { Component } from 'react';
import Layout from 'components/layout/app/main-index';

class App extends Component {
	render() {
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
										지금 시작하기
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
							<div className="main-section-02-pice-01 main-section-02-pice"/>
							<div className="main-section-02-pice-02 main-section-02-pice"/>

							<div className="box-container">
								<h1 className="display-3-R txt-violet-04">
									<span className="display-3-B">한국기술HUB의 
									차별화된 서비스</span>를 확인해보세요.
								</h1>
							</div>
						</article>

					</section>
				</Layout>
		)
	}
};
export default App;