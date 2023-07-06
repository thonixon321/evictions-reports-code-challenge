<template>
    <section class="tenant-screening">
			<div class="sitewrapper">
				<div class="contents">
					<div class="col tenant-left">
						<slot name="left"></slot>
					</div>
					<div class="col tenant-right">
						<slot name="right"></slot>
					</div>
				</div>
			</div>
		</section>
</template>