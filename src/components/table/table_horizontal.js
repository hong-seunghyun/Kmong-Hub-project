import React from 'react';
import 'scss/public.scss'
import 'scss/components_style.scss'
import Label from 'components/label/label';

const Component = () => {
	return(
		<table className="table-horizontal-container radius-20 body-3-R">
			<tbody>
				<tr>
					<th className="thead ">
						thead
					</th>
					<td className="tbody">
						data
					</td>
				</tr>
				<tr>
					<th className="thead">
						thead
					</th>
					<td className="tbody">
						<Label 
							backgroundColor="bg-violet-5" 
							fontColor="txt-violet-1" 
							text="AI 사용" 
							icon="false" 
							iconColor=""
						/>
						<Label 
							backgroundColor="bg-violet-5" 
							fontColor="txt-violet-1" 
							text="AI 사용" 
							icon="false" 
							iconColor=""
						/>
						<Label 
							backgroundColor="bg-violet-5" 
							fontColor="txt-violet-1" 
							text="AI 사용" 
							icon="false" 
							iconColor=""
						/>
					</td>
				</tr>
				<tr>
					<th className="thead" >
						thead
					</th>
					<td className="tbody">
						<div className="data-wrap flex_">
							<img className="img-preview" src="images/sample-img.png" alt="file" />
							<div className="text-wrap flex_">
								<h6 className="body-3-B">파일명.확장자</h6>
								<p className="caption-R">파일크기 mb</p>
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<th className="thead">
						thead
					</th>
					<td className="tbody">
						data
					</td>
				</tr>
			</tbody>
		</table>
	)
}
export default Component;