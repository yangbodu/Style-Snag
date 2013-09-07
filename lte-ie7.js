/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-quill' : '&#xe000;',
			'icon-home' : '&#xe001;',
			'icon-bullhorn' : '&#xe002;',
			'icon-camera' : '&#xe003;',
			'icon-tags' : '&#xe004;',
			'icon-binoculars' : '&#xe006;',
			'icon-user' : '&#xe007;',
			'icon-users' : '&#xe008;',
			'icon-undo' : '&#xe009;',
			'icon-redo' : '&#xe00a;',
			'icon-map' : '&#xe00b;',
			'icon-coin' : '&#xe00c;',
			'icon-credit' : '&#xe00d;',
			'icon-trophy' : '&#xe00e;',
			'icon-target' : '&#xe00f;',
			'icon-heart-broken' : '&#xe010;',
			'icon-heart' : '&#xe011;',
			'icon-instagram' : '&#xe012;',
			'icon-twitter' : '&#xe013;',
			'icon-facebook' : '&#xe014;',
			'icon-list' : '&#xe015;',
			'icon-fire' : '&#xe016;',
			'icon-bookmarks' : '&#xe017;',
			'icon-heart-2' : '&#xe018;',
			'icon-checkbox-checked' : '&#xe019;',
			'icon-table' : '&#xe01a;',
			'icon-clock' : '&#xe01b;',
			'icon-images' : '&#xe01c;',
			'icon-cog' : '&#xe005;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};