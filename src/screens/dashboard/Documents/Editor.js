import React, { useEffect, useRef } from 'react';
import WebViewer from '@pdftron/webviewer';
import styled from 'styled-components';
import Doc from './Templates/protocolo.docx';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  background: #999;
`;

const Header = styled.header`
  width: 100%;
  height: 60px;
  padding: 8px 8px 8px 16px;
  box-sizing: border-box;
  background: #00a5e4;
  font-size: 1.2em;
  line-height: 44px;
  color: white;
`;

const Editor = () => {
	const viewer = useRef(null);

  useEffect(() => {
    WebViewer(
      {
        path: '/webviewer/lib',
        initialDoc: Doc,
      },
      viewer.current,
    ).then((instance) => {
      const { docViewer, Annotations } = instance;
      const annotManager = docViewer.getAnnotationManager();

      docViewer.on('documentLoaded', () => {
        const rectangleAnnot = new Annotations.RectangleAnnotation();
        rectangleAnnot.PageNumber = 1;
        // values are in page coordinates with (0, 0) in the top left
        rectangleAnnot.X = 100;
        rectangleAnnot.Y = 150;
        rectangleAnnot.Width = 200;
        rectangleAnnot.Height = 50;
        rectangleAnnot.Author = annotManager.getCurrentUser();

        annotManager.addAnnotation(rectangleAnnot);
        // need to draw the annotation otherwise it won't show up until the page is refreshed
        annotManager.redrawAnnotation(rectangleAnnot);
      });
    });
  }, []);

	return (
		<Container>
			<Header>Documento</Header>
			<div className="webviewer" ref={viewer}></div>
		</Container>
	);
};

export default Editor;
